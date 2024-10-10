from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import PostSerializer
from .models import Usuario
# from django.contrib.auth.hashers import check_password
# import re

# Create your views here.
class RegistroView(APIView):
    queryset = Usuario.objects.all()
    serializer_class = PostSerializer 
    
    def post (self,request):
        username = request.data.get('username').strip()
        email = request.data.get('email').strip()
        password = request.data.get('password').strip()
        
          
        
    
        # contra_regex = r"(?=^.{10,}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^a-zA-Z\d])"
        
        # if not re.match(contra_regex,password):
        #     return Response({'error': 'Contrasenia no cumple con la vara esa'}, status=status.HTTP_400_BAD_REQUEST)
        
        if Usuario.objects.filter(username=username).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
      
        if username == ' ' and password == ' ' and email == ' ':
            return Response({'error': 'Por favor ingrese los datos solicitados'}, status=status.HTTP_204_NO_CONTENT)
    
        nuevo_usuario = Usuario.objects.create(username=username, email=email ,password=password)
        return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
    
      
            
    
    

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        usuario = Usuario.objects.filter(username=username).first()
        
        if usuario and usuario.password==password:
            return Response({'success': 'Usuario autenticado'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        
