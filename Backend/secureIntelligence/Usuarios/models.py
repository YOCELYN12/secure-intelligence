from django.db import models
# from django.contrib.auth.models import User
 
# Create your models here. 
class Departamentos(models.Model):
    ID_departamento = models.AutoField(primary_key=True)
    Departamento_laboral = models.CharField(max_length=250)
   
class Empleados (models.Model):
    ID_empleados = models.AutoField(primary_key=True)
    ID_departamento = models.ForeignKey(Departamentos,on_delete=models.CASCADE)
    Numero_telefono = models.CharField(max_length=40)
    Fecha_contrado = models.DateTimeField(blank=True)
    Fecha_finalizacion = models.DateTimeField(blank=True)

    
class Administradores (models.Model):
    ID_administrador = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255)
    
class Clientes (models.Model):
    Id_cliente = models.AutoField(primary_key=True)
    Name_company = models.CharField(max_length=250)
    contacto = models.CharField(max_length=80)
    nombre_responsable = models.CharField(max_length=25)
    numero_telefono = models.CharField(max_length=50)

class Tipo_usuario (models.Model):
    ID_tipo_usuario = models.AutoField(primary_key=True)
    ID_administrador = models.ForeignKey(Administradores, on_delete=models.CASCADE)
    Id_cliente = models.ForeignKey(Clientes,on_delete=models.CASCADE)

class Usuario(models.Model):
   user = models.AutoField(primary_key=True)
#    ID_tipo_usuario = models.ForeignKey(Tipo_usuario, on_delete=models.CASCADE, null=True, blank=True)
   ID_servicios = models.ForeignKey('Servicios.Servicios_disponibles', on_delete=models.CASCADE,null=True, blank=True)
   ID_empleado = models.ForeignKey(Empleados, on_delete=models.CASCADE,null=True, blank=True)
   
  