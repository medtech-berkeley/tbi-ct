import subprocess
import random
import argparse

# Parse arguemnts
parser = argparse.ArgumentParser()
parser.add_argument('-f', dest = 'file', type = str, help = 'File path to CT scan directories. All files must be in `.dcm` format.')
args = parser.parse_args()


# Initialize Docker Container
container_name = 'autoct' + str(random.randrange(1, 1000, 1))
datafile = str(args.file) + ':/data'

docker_run = ['docker', 'run', '--rm', '--name', container_name, '-v', datafile, '-it', 'autoct:1.1', '/bin/bash']
subprocess.run(docker_run, shell = True)