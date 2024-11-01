from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from User.models import Usere
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password

#Vista para registrar los usuarios 
class RegistroView(APIView):
    permission_classes=[AllowAny]
    
    #Se utiliza el metodo post para poder enviar los datos a los modelos
    def post (self,request):
    
        #Objeto que guarda  los datos de la solicitud post
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        #Condicion que se encarga de validar en la base de datos si el usuario ya existe o no 
        if User.objects.filter(username=username).exists():
            return Response({'error': "Usuario ya existia"}, status=status.HTTP_400_BAD_REQUEST)  #Respuesta si el usuario existe
        else:    
            nuevo_usuario = User.objects.create_user(username=username, email=email ,password=password) 
            Usere.objects.create(user=nuevo_usuario)  #Crea una instacia para el modelo usere 
            return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)  #Respuesta para el usuario creado
        
      
# Vista para poder registrar los usuarios que son solo administradores
class RegistroAdminView(APIView):
    
    permission_classes=[AllowAny]
    def post (self,request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        
        # Condicion   
        if User.objects.filter(username=username).exists():
            return Response({'error': "Usuario ya existia"}, status=status.HTTP_400_BAD_REQUEST)
        else:    
            nuevo_usuario = User.objects.create_superuser(username=username, email=email ,password=password)
            return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
        
        
        
        
#Vista para que los usuarios puedan logearse 
class LoginView(APIView):
    permission_classes=[AllowAny]
    
    def post(self,request):
        #Obtine el username y la password de la solicitud
        username = request.data.get('username')
        password = request.data.get('password')
        
        #Filtra el usuario y busca si el mismo existe en el base de datos
        usuario = User.objects.filter(username=username).first()
         
        #Condicion que se encarga de verificar si el usuario ingresado existe
        if usuario and check_password(password,usuario.password):
            
            #Sistema de autenticacion que le da un token al usurio ingresado
            refresh = RefreshToken.for_user(usuario)
            
            return Response({
                'success': 'Usuario autenticado',
                'idUsuario':usuario.id,
                'super':{usuario.is_superuser},
                'token':str(refresh.access_token), 
                "refresco":str(refresh)},
                status=status.HTTP_200_OK)
        else:   
            return Response({'error': f'Credenciales inválidas {usuario}'}, status=status.HTTP_400_BAD_REQUEST)
            
