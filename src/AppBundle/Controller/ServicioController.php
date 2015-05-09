<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use AppBundle\Entity\Servicio;

/**
 * @RouteResource("Servicio")
 */
class ServicioController extends ApiRestController
{
	/**
	 * @ApiDoc(
	 *
	 * )
	 * @return array
	 */
	public function cgetAction()
	{
		return $this->cget("Servicio");
	}//"get_users"     [GET] /clientes


	/**
	 * @param Servicio $servicio
	 * @return Servicio
	 */
	public function getAction(Servicio $servicio)
	{
		return $servicio;
	}//"get_servicio"      [GET] /servicios/{id}


	public function postAction()
	{
		return $this->post("Servicio");
	}//"new_servicio"     [POST] /servicios


	public  function putAction(Servicio $servicio)
	{
		$ServicioEditado = $this->deserializa('Servicio');

		$servicio->setNombre($ServicioEditado->getNombre());
		$servicio->setDescripcion($ServicioEditado->getDescripcion());
		$servicio->setDuracion($ServicioEditado->getDuracion());
		$servicio->setPrecio($ServicioEditado->getPrecio());
		$servicio->setHabilitadoParaReserva($ServicioEditado->getHabilitadoParaReserva());

		return $this->guarda($servicio);
	}



	public function deleteAction(Servicio $servicio)
	{
		return $this->borra($servicio);
	}//"delete_servicio"      [DELETE] /servicios/{id}
}
