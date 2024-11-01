from rest_framework.routers import DefaultRouter
from .views import ServicioView
from .views import TicketsView

router_post = DefaultRouter() #Gestiona las rutas URLS para las vistas que se registren


#Registra las vistas en el enrutador
router_post.register(
    prefix='servicios', basename='servicios', viewset=ServicioView,
    prefix='tickets', basename='tickets', viewset=TicketsView
)

#Router es mas de frame, url es de django 