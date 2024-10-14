# from django.shortcuts import render
from rest_framework.views import APIView
# from rest_framework.response import Response
from .serializers import ListarCrearSerializer
from .models import Tipo_servicio
from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ServicioView(generics.ListCreateAPIView):
    queryset = Tipo_servicio.objects.all()
    serializer_class = ListarCrearSerializer
    # permission_classes = [IsAuthenticated]
    
    
    
class GetView(APIView):
    def get  (self,request):
        Area = request.data.get('Area')
        Nombre = request.data.get('Nombre')
        Descripcion_servicio = request.data.get('Descripcion_servicio')