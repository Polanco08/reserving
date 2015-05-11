<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use AppBundle\Entity\Cliente;


/**
 * @RouteResource("Cliente")
 *
 */

class ClienteController extends ApiRestController
{
    /**
     * @ApiDoc(
     * description="Retorna una listado de clientes",
     * resource=true,
     * statusCodes={
     *         200="La petición ha sido exitosa",
     *         403="Usuario no autenticado para este recurso",
     *         404={
     *           "No Found / Recurso no existe",
     *           "No Found / Servicio no encontrado"
     *         }
     *     }
     * )
     */
	public function cgetAction()
	{
		return $this->cget("Cliente");
	}//"get_users"     [GET] /clientes

    public function getAction(Cliente $id)
	{
		return $id;
	}//"get_user"      [GET] /clientes/{id}


    /**
     * @ApiDoc(
     * description="Agrega un nuevo cliente",
     * requirements={
     *      {"name"="nombre","dataType"="string","requirement"="","description"="Nombre del cliente, obligatorio"},
     *      {"name"="apellidos","dataType"="string","requirement"="","description"="Apellidos del cliente, opcional"},
     *      {"name"="edad","dataType"="string","requirement"="","description"="Edad del cliente, opcional"},
     *      {"name"="genero","dataType"="string","requirement"="","description"="Genero del cliente, opcional"},
     *      {"name"="dni","dataType"="string","requirement"="","description"="DNI del cliente"},
     *      {"name"="fechaNacimiento","dataType"="datetime","requirement"="","description"="Fecha de nacimiento del cliente"},
     *      {"name"="email","dataType"="string","requirement"="","description"="Teléfono del cliente."},
     *      {"name"="tel","dataType"="string","requirement"="","description"="Teléfono del cliente"},
     *      {"name"="direccion","dataType"="string","requirement"="","description"="Dirección del cliente."},
     *      {"name"="cPostal","dataType"="string","requirement"="","description"="Código Postal del cliente."}
     * }
     * )
     */
	public function postAction()
	{
		return $this->post("Cliente");
	}//"new_users"     [POST] /clientes


    /**
     * @param Cliente $id
     * @return mixed
     *
     * @ApiDoc(
     * description="Actualiza un cliente por su ID",
     * parameters={
     *      {"name"="id", "dataType"="integer", "required"=true, "description"="Cliente ID"}
     * }
     * )
     */
    public  function putAction(Cliente $id)
	{
        $cliente = $id;
		$ClienteEditado = $this->deserializa('Cliente');

		$cliente->setNombre($ClienteEditado->getNombre());
		$cliente->setApellidos($ClienteEditado->getApellidos());
        $cliente->setEmail($ClienteEditado->getEmail());

		return $this->guarda($cliente);
	}

    /**
     * @ApiDoc(
     * description="Agrega un nuevo cliente",
     * parameters={{"name"="id", "dataType"="integer", "required"=true, "description"="Cliente ID"}}
     * )
     */
	public function deleteAction(Cliente $id)
	{
		return $this->borra($id);
	}
}
