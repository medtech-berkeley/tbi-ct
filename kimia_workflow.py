import docker


client = docker.DockerClient(base_url='unix://var/run/docker.sock')
image = client.images.get('autoct:1.1')
print(image)
container = client.containers.run(image, detach = True)
container.exec_run("autoct-convert --use-dcm2niix 'illustration_data/dcmfiles/*' /data/output")
print(container.logs())








# print(client.containers.list())
# image = client.images.pull('zhebai/autoct:1.1')
# image.tag('zhebai/autoct:1.1', tag='autoct:1.1')
# print(image)
# print(image.tag)


# image = client.containers.list()[0].image
# container = client.containers.run(image, command="autoct-convert --use-dcm2niix  'illustration_data/dcmfiles/*' /data/output", detach = True)
# container2 = client.containers.run(image, command="autoct-preprocessing -m illustration_data/MNI152_T1_1mm_brain.nii.gz '/data/output/*/convert/*.nii.gz' /data/output", detach = True)
# print(container.logs(), container2.logs())
print("HELLO")
