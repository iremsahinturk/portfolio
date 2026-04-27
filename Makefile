.PHONY: *
SHELL := /bin/bash


install:
	@echo "Installing NPM packages..."
	@corepack enable && yarn install

run:
	VITE_APP_PASSWORD=deneme \
	yarn dev
