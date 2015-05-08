<?php

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminController  extends Controller{
	public function indexAction()
	{
		return $this->render('@App/admin/index.html.twig');
	}
} 