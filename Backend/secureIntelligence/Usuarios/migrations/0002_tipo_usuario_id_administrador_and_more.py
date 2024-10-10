# Generated by Django 5.1.1 on 2024-10-09 20:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Servicios', '0002_factura_id_suscripcion_and_more'),
        ('Usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tipo_usuario',
            name='ID_administrador',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Usuarios.administradores'),
        ),
        migrations.AddField(
            model_name='tipo_usuario',
            name='Id_cliente',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Usuarios.clientes'),
        ),
        migrations.AddField(
            model_name='usuario',
            name='ID_servicios',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Servicios.servicios_disponibles'),
        ),
        migrations.AddField(
            model_name='usuario',
            name='ID_tipo_usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Usuarios.tipo_usuario'),
        ),
    ]