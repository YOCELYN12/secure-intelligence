# Generated by Django 5.1.1 on 2024-10-09 20:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Servicios', '0001_initial'),
        ('Usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='factura',
            name='ID_suscripcion',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Servicios.suscripciones'),
        ),
        migrations.AddField(
            model_name='servicios_disponibles',
            name='ID_tipo_servicio',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Servicios.tipo_servicio'),
        ),
        migrations.AddField(
            model_name='suscripciones',
            name='ID_servicio',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Servicios.servicios_disponibles'),
        ),
        migrations.AddField(
            model_name='suscripciones',
            name='ID_usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Usuarios.usuario'),
        ),
    ]
