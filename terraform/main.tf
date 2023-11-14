# main.tf

# resource "aws_key_pair" "opcion_financiera_dev" {
#   key_name   = "opcion_financiera_dev"      # Nombre de la nueva clave SSH
#   public_key = file(var.public_key_path)    # Ruta de tu clave pública SSH
# }

resource "aws_security_group" "boosteriit_dev" {
  name        = "boosteriit_dev"
  description = "Allow inbound traffic on port 22, 80 and 4200  and all outbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "boosteriit_dev"
  }
}

resource "aws_instance" "boosteriit_dev" {
  ami           = "ami-0dbc3d7bc646e8516" 
  instance_type = "t2.medium"
  key_name      = "boosteriit_server"
  vpc_security_group_ids = [ aws_security_group.boosteriit_dev.id ]

  tags = {
    Name = "boosteriit_dev"
  }
}