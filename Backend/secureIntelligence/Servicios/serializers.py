from rest_framework.serializers import ModelSerializer
from .models import Tipo_servicio

class ListarCrearSerializer(ModelSerializer):
    class Meta:
        model = Tipo_servicio
        fields = '__all__'
        
        