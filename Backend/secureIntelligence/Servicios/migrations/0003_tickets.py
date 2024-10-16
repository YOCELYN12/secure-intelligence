# Generated by Django 5.1.1 on 2024-10-16 20:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Servicios', '0002_factura_id_suscripcion_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tickets',
            fields=[
                ('ID_Tickets', models.AutoField(primary_key=True, serialize=False)),
                ('Nombre', models.CharField(max_length=255)),
                ('Apellido', models.CharField(max_length=255)),
                ('Correo', models.CharField(max_length=255)),
                ('Numero_de_telefono', models.CharField(max_length=255)),
                ('Empresa', models.CharField(max_length=255)),
                ('Descripcion', models.CharField(max_length=255)),
                ('ID_Tipo_servicio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Servicios.tipo_servicio')),
            ],
        ),
    ]
