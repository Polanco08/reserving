<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;


class ApiRestController extends FOSRestController implements ClassResourceInterface
{

	// MUESTRA LISTADO DE OBJETO
	protected function cget($entidad)
	{
		return $this->getDoctrine()
			->getRepository('AppBundle:'.$entidad)
			->findAll();
	}

	// DESERIALIZADOR DE OBJETOS
	protected function deserializa($entidad)
	{
		$rutaEntidad = 'AppBundle\Entity\\'.$entidad;
		$serializer = $this->get('jms_serializer');

		$content = $this->get("request")->getContent();
		$obj = $serializer->deserialize($content, $rutaEntidad, 'json');

		if ($obj instanceof $rutaEntidad === false)
			throw new HttpException(400, "El elemento no es válido.");

		return $obj;
	}

	// PERSISTE OBJETO
	protected function post($entidad)
	{
		$obj = $this->deserializa($entidad);
		return $this->guarda($obj);
	}

	// GUARDA UN OBJETO EN LA BASE DE DATOS
	protected function guarda($obj)
	{
		$em = $this->getDoctrine()->getManager();
		$em->persist($obj);
		$em->flush();

		return $obj;
	}

	// ELIMINA OBJETO
	public function borra($obj)
	{
		$em = $this->getDoctrine()->getManager();
		$em->remove($obj);
		$em->flush();

		return $obj;
	}
} 