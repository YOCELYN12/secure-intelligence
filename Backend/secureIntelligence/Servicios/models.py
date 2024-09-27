from django.db import models

# Create your models here.

class Tipo_servicio (models.Model):
    ID_tipo_servicio = models.AutoField(primary_key= True)
    Area = models.CharField(max_length=255)
    Nombre = models.CharField(max_length=50)
    Descripcion_servicio = models.TextField()
  
class Servicios_disponibles (models.Model):
    ID_servicio = models.AutoField(primary_key=True)
    ID_tipo_servicio = models.ForeignKey(Tipo_servicio,on_delete=models.CASCADE)
    Descripcion = models.TextField()   
    ID_empleado = models.ForeignKey('Usuarios.Empleados',on_delete=models.CASCADE, null=True, blank=True)
    

class Suscripciones (models.Model):
    ID_suscripcion = models.AutoField(primary_key=True)
    ID_usuario = models.ForeignKey('Usuarios.Usuario',on_delete=models.CASCADE)
    ID_servicio = models.ForeignKey(Servicios_disponibles,on_delete=models.CASCADE)
    
   

class Factura (models.Model):
    ID_factura = models.AutoField(primary_key=True)
    ID_suscripcion = models.ForeignKey(Suscripciones,on_delete=models.CASCADE)
    Fecha_suscripcion = models.DateTimeField(blank=True)
    Fecha_finalizacion = models.DateTimeField(blank=True)
    Estado = models.BooleanField(default=False)
    
    
  