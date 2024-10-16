from rest_framework.routers import DefaultRouter
from .views import ServicioView
from .views import TicketsView

router_post = DefaultRouter()
router_post.register(
    prefix='posts', basename='posts', viewset=ServicioView,
    prefix='posts', basename='posts', viewset=TicketsView
)