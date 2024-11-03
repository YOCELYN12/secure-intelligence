# from django.shortcuts import render
from django.shortcuts import redirect, render
from flask import Response
from rest_framework.views import APIView
# from rest_framework.response import Response
from .serializers import ListarCrearSerializer
from .models import Tipo_servicio
from rest_framework import generics
from .models import Tickets
from .serializers import TicketsSerializer
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter

# Create your views here.b 

# Vista encargada de crear y agregar los tipos de servicios 
class ServicioView(generics.ListCreateAPIView):
    queryset = Tipo_servicio.objects.all()  #Consulta para obtener los tipos de servicios 
    serializer_class = ListarCrearSerializer  #Serializa los datos
    # permission_classes = [IsAuthenticated]
    
    
# Vista encargada de listar y crear los tickets generados
class TicketsView(generics.ListCreateAPIView): 
    queryset = Tickets.objects.all() #Consulta para obtener los tickets
    serializer_class = TicketsSerializer #Se encarga de serializar los datos 
    filter_backends = [SearchFilter]  #Atributo para poder buscar entre los tickets
    search_fields = ['Nombre']  #Campo por el que se realiza la busqueda
    
    
    
#Vista para poder eliminar los tickets 
class DeleteTicket(DestroyAPIView):
    queryset = Tickets.objects.all() #Consulta para poder obtener todos los tickets
    serializer_class = TicketsSerializer #Serializa los datos
    lookup_field = 'ID_Tickets'  #Atributo para eliminar mediante el ID de los tickets un ticket 
      
#Vista para poder actualizar la informacion de los tickets 
class UpdateTicket(UpdateAPIView):
    queryset = Tickets.objects.all() #Consulta para obtener todos los tickets
    serializer_class = TicketsSerializer # Searializa los datos
    lookup_field = 'ID_Tickets' #Actualiza los tickets mediante el ID 

    

        
        
    
    
    

        
        
   