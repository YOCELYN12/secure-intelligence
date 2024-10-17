from django.db import models

# Create your models here.

class Tipo_servicio (models.Model):
    ID_tipo_servicio = models.AutoField(primary_key = True)
    Area = models.CharField(max_length=255)
    Nombre = models.CharField(max_length=50)
    Descripcion_servicio = models.TextField()
    
    def __str__(self):
        return self.Nombre
    
  
class Servicios_disponibles (models.Model):
    ID_servicio = models.AutoField(primary_key=True)
    ID_tipo_servicio = models.ForeignKey(Tipo_servicio,on_delete=models.CASCADE,null=True, blank=True)
    Descripcion = models.TextField()   
    # ID_empleado = models.ForeignKey('Usuarios.Empleados',on_delete=models.CASCADE, null=True, blank=True)
    

class Suscripciones (models.Model):
    ID_suscripcion = models.AutoField(primary_key=True)
    ID_usuario = models.ForeignKey('Usuarios.Usuario',on_delete=models.CASCADE, null=True, blank=True)
    ID_servicio = models.ForeignKey(Servicios_disponibles,on_delete=models.CASCADE, null=True, blank=True)
    

class Factura (models.Model):
    ID_factura = models.AutoField(primary_key=True)
    ID_suscripcion = models.ForeignKey(Suscripciones,on_delete=models.CASCADE,null=True, blank=True)
    Fecha_suscripcion = models.DateTimeField(blank=True)
    Fecha_finalizacion = models.DateTimeField(blank=True)
    Estado = models.BooleanField(default=False)
    
class Tickets  (models.Model):
    ID_Tickets = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=255)
    Apellido = models.CharField(max_length=255)
    Correo = models.CharField(max_length=255)
    ID_Tipo_servicio = models.ForeignKey(Tipo_servicio,on_delete=models.CASCADE, null=True, blank=True)    
    Numero_de_telefono = models.CharField(max_length=255)
    Empresa = models.CharField(max_length=255)
    Descripcion = models.CharField(max_length=255)  