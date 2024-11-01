from rest_framework.serializers import ModelSerializer
from .models import Tipo_servicio
from .models import Tickets

#Serializer para crear los tipos de servicios
class ListarCrearSerializer(ModelSerializer):
    class Meta:
        model = Tipo_servicio  #Indica el modelo relacionado
        fields = '__all__'    #Trae todos los campos del modelo
    
    
#Serializer para crear los tickets     
class TicketsSerializer(ModelSerializer):
    class Meta:
        model = Tickets  #Indica el modelo relacionado
        fields = '__all__'  #Trae todos los campode del modelo
         
        