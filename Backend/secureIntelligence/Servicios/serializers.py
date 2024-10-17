from rest_framework.serializers import ModelSerializer
from .models import Tipo_servicio
from .models import Tickets

class ListarCrearSerializer(ModelSerializer):
    class Meta:
        model = Tipo_servicio
        fields = '__all__'
        
class TicketsSerializer(ModelSerializer):
    class Meta:
        model = Tickets 
        fields = '__all__'
        
        