#!/bin/bash

docker run --rm -it -w $PWD -v $PWD:$PWD hashicorp/terraform:1.6 apply -var-file="terraform.tfvars"