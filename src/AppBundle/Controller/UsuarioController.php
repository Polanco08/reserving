<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RouteResource;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use AppBundle\Entity\Usuario;

/**
 * @RouteResource("Usuario")
 */
class UsuarioController extends ApiRestController{
    /**
     * @ApiDoc(
     *  description="Listado de usuarios",
     * resource=true
     * )
     * @return array
     */
    public function cgetAction()
    {
        return $this->cget("Usuario");
    }//"get_users"     [GET] /usuarios


    public function getAction(Usuario $id)
    {
        return $id;
    }//"get_usuarios"      [GET] /usuarios/{id}


    public function postAction()
    {
        return $this->post("Usuarios");
    }//"new_usuarios"     [POST] /usuarios

    public function deleteAction(Usuario $id)
    {
        return $this->borra($id);
    }//"delete_usuario"      [DELETE] /usuario/{id}
} 