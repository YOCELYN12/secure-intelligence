from django.db import models

#Modelo Tipo de servicio se encarga de guardar los datos requeridos
class Tipo_servicio (models.Model):
    ID_tipo_servicio = models.AutoField(primary_key = True) #Llave primaria que se encargara de diferenciar y relacionar el modelo
    Area = models.CharField(max_length=255)  #Area en la que entra el tipo de servicio
    Nombre = models.CharField(max_length=50)  #Nombre de servicio
    Descripcion_servicio = models.TextField()  #Descripcion del servicio 
    
    def __str__(self):
        return self.Nombre  #Retorna el nombre para que se muestre en vez del ID
    
  
#Modelo para los tickets
    
class Tickets  (models.Model):
    ID_Tickets = models.AutoField(primary_key=True)  #Lave primaria para los tickets
    Nombre = models.CharField(max_length=255)  #Nombre de la persona que genera el ticket
    Apellido = models.CharField(max_length=255) #Apellido de la persona que genera el ticket
    Correo = models.CharField(max_length=255)  #Correo de la persona que genera el ticket
    ID_tipo_servicio = models.ForeignKey(Tipo_servicio,on_delete=models.CASCADE)   #Servicio que la persona solicita para el ticket 
    Numero_de_telefono = models.CharField(max_length=255)  #Numero de telefono de la persona que genera el ticket
    Empresa = models.CharField(max_length=255)  #Empresa a la que se le estara dando el servicio
    Descripcion = models.CharField(max_length=255)   #Descripcion sobre el ticket y la informacion del mismo
    estado = models.BooleanField(default=True)    #Estado del ticket para que se indique si el mismo ya se trabajo o esta activo
    

    