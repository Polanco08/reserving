<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Cita;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;

/**
 * @RouteResource("Cita")
 *
 */

class CitaController extends ApiRestController
{
    /**
     * @ApiDoc(
     * description="Retorna una listado de citas",
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
        return $this->cget("Cita");
    }//"get_citas"     [GET] /citas


    public function getAction(Cita $id)
    {
        return $id;
    }//"get_cita"      [GET] /citas/{id}


    /**
     * @ApiDoc(
     * description="Agrega un nuevo cliente",
     * requirements={
     *      {"name"="fecha","dataType"="datetime","requirement"="","description"="Fecha de la cita"},
     * }
     * )
     */
    public function postAction()
    {
        return $this->post("Cita");
    }//"new_citas"     [POST] /citas


    /**
     * @param Cliente $id
     * @return mixed
     *
     * @ApiDoc(
     * description="Actualiza una cita por su ID",
     * parameters={
     *      {"name"="id", "dataType"="integer", "required"=true, "description"="Cita ID"}
     * }
     * )
     */
    public  function putAction(Cita $id)
    {
        $cita = $id;
        $CitaEditada = $this->deserializa('Cita');

        $tiempoServicio = $CitaEditada->getServicio()->getDuracion();

        $cita->setHoraInicio($CitaEditada->getHoraInicio());
        $cita->setHoraFinal($CitaEditada->getHoraInicio() + $tiempoServicio);
        $cita->setFecha($CitaEditada->getFecha());


        $cita->setCliente($CitaEditada->getCliente());
        $cita->setEmpleado($CitaEditada->getEmpleado());
        $cita->setServicio($CitaEditada->getServicio());

        return $this->guarda($cita);
    }


    /**
     * @ApiDoc(
     * description="Elimina un cita",
     * parameters={{"name"="id", "dataType"="integer", "required"=true, "description"="Cita ID"}}
     * )
     */
    public function deleteAction(Cita $id)
    {
        return $this->borra($id);
    }


}
