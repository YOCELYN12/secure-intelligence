# Generated by Django 5.1.1 on 2024-10-08 15:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Usuarios', '0008_remove_usuario_id_alter_usuario_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='ID_tipo_usuario',
        ),
        migrations.DeleteModel(
            name='Tipo_usuario',
        ),
    ]
