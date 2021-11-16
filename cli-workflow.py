import subprocess
import random
import argparse
import time

# --------------------------------------------------------------------------------------------
# cli-workflow.py - Python Script to Run AutoCT
# 
# Purpose: Creates a new Docker container everytime the script is run and runs through the 
#     AutoCT pipeline as shown in the AutoCT documentation.
#
# To run in terminal: `python3 cli-workflow.py -f <FILEPATH>`
# - <FILEPATH>: Absolute path to data file. 
#
# To test using the sample data in `sample_data`:
# - Make sure there is no `output` file inside ./sample_data
# - Input the command `python3 cli-workflow.py -f <PATH TO REPO>/tbi-ct/sample_data`
# - Output files will be stored in <PATH TO REPO>/tbi-ct/sample_data/output
# 
# Note: This script (particularly AutoCT) takes a while, ~15 minutes. Best to leave it running
#    in the back and come back to it later to see the output.
# --------------------------------------------------------------------------------------------

# Parse arguemnts
parser = argparse.ArgumentParser()
parser.add_argument('-f', dest = 'file', type = str, help = 'File path to CT scan directories. All files must be in `.dcm` format.')
args = parser.parse_args()

startTime = time.time()

# Initialize Docker Container
container_name = 'autoct' + str(random.randrange(1, 1000, 1))
datafile = str(args.file) + ':/data'

print("Confirming file name: " + datafile)

print("Creating AutoCT Docker container...")
docker_run = ['docker', 'container', 'run', '-d', '--name', container_name, '-v', datafile, '-it', 'autoct:1.1', '/bin/bash']
subprocess.run(docker_run, shell = True)
print("...Container Created: " + container_name + "\n")

print("------------------------------------------")


# AutoCT Convert
print("> Running autoct-convert...")
convert = ['docker', 'container', 'exec', container_name, 'autoct-convert', '--use-dcm2niix', '/data/*', '/data/output']
subprocess.run(convert, shell = True)
print("> AutoCT Convert Completed. \n")

# AutoCT Preprocessing
print("> Running AutoCT Preprocessing...")
preprocess = ['docker', 'container', 'exec', container_name, 'autoct-preprocessing', '-m', 'illustration_data/MNI152_T1_1mm_brain.nii.gz', '/data/output/*/convert/*.nii.gz', '/data/output']
subprocess.run(preprocess, shell = True)
print("> AutoCT Preprocessing Completed. \n")

# AutoCT Skull Strip
print("> Running AutoCT Skull Stripping...")
skull_strip = ['docker', 'container', 'exec', container_name, 'autoct-skull-strip', '/data/output/*/preprocessing/*.nii.gz', '/data/output']
subprocess.run(skull_strip, shell = True)
print("AutoCT Skull Stripping Completed. \n")

# AutoCT Registration
print("> Running AutoCT Registration...")
registration = ['docker', 'container', 'exec', container_name, 'autoct-registration', '-t', 'illustration_data/T_template0.nii.gz', 
'/data/output/*/skull_strip/*.nii.gz', '/data/output']
subprocess.run(registration, shell = True)
print("> AutoCT Registration Completed. \n")

# AutoCT Segmentation
print("> Running AutoCT Segmentation...")
segmentation = ['docker', 'container', 'exec', container_name, 'autoct-segmentation', '-a', 'illustration_data/New_atlas_cort_asym_sub.nii.gz', '/data/output/*/registration/*/*.nii.gz', '/data/output']
subprocess.run(segmentation, shell = True)
print("> AutoCT Segmentation Completed. \n")

# AutoCT GeoMeasures
print("> Running AutoCT GeoMeasures...")
geoMeasures = ['docker', 'container', 'exec', container_name, 'autoct-label-geometry-measures', '/data/output/*/segmentation/*/*.nii.gz', '/data/output']
subprocess.run(geoMeasures, shell = True)
print("> AutoCT GeoMeasures Completed. \n")

# AutoCT WarpStats
print("> Running AutoCT WarpStats...")
warpStats = ['docker', 'container', 'exec', container_name, 'autoct-warp-intensity-stats', '-a', 'illustration_data/New_atlas_cort_asym_sub.nii.gz', '/data/output/*/registration/*/*.nii.gz', '/data/output']
subprocess.run(warpStats, shell = True)
print("> AutoCT WarpStats Completed. \n")

print("------------------------------------------")

# Terminate Docker Container
print("End of AutoCT -- Terminating Docker container...")
subprocess.run("docker container stop " + container_name + " -t 2", shell = True, stdout=subprocess.DEVNULL)
subprocess.run("docker container rm " + container_name, shell = True, stdout=subprocess.DEVNULL)
time.sleep(2)
print("Docker container " + container_name + " successfully terminated. \n \n")

executionTime = (time.time() - startTime)
print("AutoCT Runtime: " + str(executionTime // 60) + " minutes " + str(executionTime % 60) + " seconds")
