all: clean build-release

build-release:
	docker build -t lmyjo/evaluation -f docker/Dockerfile .

clean:
	docker rmi -f lmyjo/evaluation
