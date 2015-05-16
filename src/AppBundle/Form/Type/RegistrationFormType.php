<?php

namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', 'email', array(
                'label' => false,
                'attr' => array(
                    'class'=>'input-lg',
                    'placeholder' => 'Correo electrónico'
                ),
                'translation_domain' => 'FOSUserBundle')
            )
            ->add('username', null, array(
                'label' => false,
                'attr'=> array(
                    'class' =>'input-lg',
                    'placeholder'=>'Nombre de usuario'
                ),
                'translation_domain' => 'FOSUserBundle')
            )
            ->add('plainPassword', 'repeated', array(
                'type' => 'password',
                'options' => array('translation_domain' => 'FOSUserBundle'),
                'first_options' => array(
                    'label' => false,
                    'attr' => array(
                        'class' => 'input-lg',
                        'placeholder' =>'Contraseña'
                    )
                ),
                'second_options' => array(
                    'label' => false,
                    'attr'=>array(
                        'class' => 'input-lg',
                        'placeholder'=>'Repite la contraseña'
                    )
                ),
                'invalid_message' => 'fos_user.password.mismatch',
            ))
        ;
    }

    public function getParent()
    {
        return 'fos_user_registration';
    }

    public function getName()
    {
        return 'app_user_registration';
    }
}
