<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class WebController extends Controller
{
    public function indexAction()
    {
        return $this->render('@App/web/index.html.twig');
    }

	public  function serviciosAction() {
		return $this->render("AppBundle:web:servicios.html.twig");
	}

	public  function faqAction() {
		return $this->render("AppBundle:web:preguntasFrecuentes.html.twig");
	}

}
