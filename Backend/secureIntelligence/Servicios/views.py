# from django.shortcuts import render
from rest_framework.views import APIView
# from rest_framework.response import Response
from .serializers import ListarCrearSerializer
from .models import Tipo_servicio
from rest_framework import generics
from .models import Tickets
from .serializers import TicketsSerializer
# from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ServicioView(generics.ListCreateAPIView):
    queryset = Tipo_servicio.objects.all()
    serializer_class = ListarCrearSerializer
    # permission_classes = [IsAuthenticated]
    
    
    
class TicketsView(generics.ListCreateAPIView):
    queryset = Tickets.objects.values('Nombre', 'Apellido', 'Correo', 'Numero_de_telefono', 'Empresa', 'Descripcion')
    serializer_class = TicketsSerializer
        
        
    
    
    

        
        
   