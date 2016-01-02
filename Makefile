all: build-release

build-release:
	docker build -t lmyjo/evaluation -f docker/Dockerfile .
