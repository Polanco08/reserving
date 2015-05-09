<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use AppBundle\Entity\Empleado;


/**
 * @RouteResource("Empleado")
 */
class EmpleadoController extends ApiRestController
{
	/**
	 * @ApiDoc(
	 *
	 * )
	 * @return array
	 */
	public function cgetAction()
	{
		return $this->cget("Empleado");
	}//"get_empleados"     [GET] /empleados


	/**
	 * @param Empleado $servicio
	 * @return Empleado
	 */
	public function getAction(Empleado $empleado)
	{
		return $empleado;
	}//"get_empleados"      [GET] /empleados/{id}


	public function postAction()
	{
		return $this->post("Empleado");
	}//"new_empleado"     [POST] /empleados


	public  function putAction(Empleado $empleado)
	{
		$EmpleadoEditado = $this->deserializa('Empleado');

		$empleado->setNombre($EmpleadoEditado->getNombre());
		$empleado->setApellidos($EmpleadoEditado->getApellidos());
		$empleado->setEmail($EmpleadoEditado->getEmail());
		$empleado->setTelefono($EmpleadoEditado->getTelefono());
		$empleado->setAlertaCitas($EmpleadoEditado->getAlertaCitas());

		return $this->guarda($empleado);
	}



	public function deleteAction(Empleado $empleado)
	{
		return $this->borra($empleado);
	}//"delete_empleado"      [DELETE] /empleados/{id}
}
