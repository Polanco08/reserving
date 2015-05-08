<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use AppBundle\Entity\Cliente;


/**
 * @RouteResource("Cliente")
 */
class ClienteController extends ApiRestController
{
	/**
	 * @ApiDoc(
	 *     statusCodes={
	 *         200="Returned when successful",
	 *         403="Returned when the user is not authorized to say hello",
	 *         404={
	 *           "Returned when the user is not found",
	 *           "Returned when something else is not found"
	 *         }
	 *     }
	 * )
	 */
	public function cgetAction()
	{
		return $this->cget("Cliente");
	}//"get_users"     [GET] /clientes

	/**
	 * {@inheritdoc}
	 */
	public function getAction(Cliente $cliente)
	{
		return $cliente;
	}//"get_user"      [GET] /clientes/{id}


	public function postAction()
	{
		return $this->post("Cliente");
	}//"new_users"     [POST] /clientes


	public  function putAction(Cliente $cliente)
	{
		$ClienteEditado = $this->deserializa('Cliente');

		$cliente->setName($ClienteEditado->getName());
		$cliente->setLastName($ClienteEditado->getLastName());

		return $this->guarda($cliente);
	}

	public function deleteAction(Cliente $cliente)
	{
		return $this->borra($cliente);
	}
}
