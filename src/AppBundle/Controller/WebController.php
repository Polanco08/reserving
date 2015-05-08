<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class WebController extends Controller
{
    public function indexAction()
    {
        return $this->render('@App/web/index.html.twig');
    }

	public  function contactoAction() {
		return $this->render("AppBundle:web:contacto.html.twig");
	}

	public  function preciosAction() {
		return $this->render("AppBundle:web:precios.html.twig");
	}

	public  function faqAction() {
		return $this->render("AppBundle:web:faq.html.twig");
	}
}
