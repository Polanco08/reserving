<?php

namespace AppBundle\Controller;
use AppBundle\Entity\Usuario;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use Proxies\__CG__\AppBundle\Entity\Cliente;

/**
 * @RouteResource("Cliente")
 */
class UsuarioClienteController extends ApiRestController {
    public function cgetAction(Usuario $usuario)
    {
        return $usuario->getClientes();
    }

    public function postAction(Usuario $usuario, Cliente $cliente)
    {
        $usuario->addCliente($cliente);

        return $this->guarda($usuario);
    }

    public function deleteAction(Usuario $usuario, Cliente $cliente)
    {
        $usuario->removeCliente($cliente);

        return $this->guarda($usuario);
    }
} 