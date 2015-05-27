<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Entity\User as BaseUser;
use AppBundle\Entity;

/**
 * Usuario
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="UsuarioRepository")
 *
 */
class Usuario extends BaseUser
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="Servicio", mappedBy="usuario")
     */
    private $servicios;


    /**
     * @var
     * @ORM\OneToMany(targetEntity="Cliente", mappedBy="usuario")
     */
    private $clientes;


    /**
     * @var
     * @ORM\OneToMany(targetEntity="Empleado", mappedBy="usuario")
     */
    private $empleados;


    /**
     * @var
     * @ORM\OneToMany(targetEntity="Cita", mappedBy="usuario")
     */
    private $citas;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $this->roles = array('ROLE_USER');
        $this->servicios = new ArrayCollection();
    }

    /**
     * Add servicios
     *
     * @param Servicio $servicios
     * @return Usuario
     */
    public function addServicio(Servicio $servicios)
    {
        $this->servicios[] = $servicios;

        return $this;
    }

    /**
     * Remove servicios
     *
     * @param \AppBundle\Entity\Servicio $servicios
     */
    public function removeServicio(Servicio $servicios)
    {
        $this->servicios->removeElement($servicios);
    }

    /**
     * Get servicios
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getServicios()
    {
        return $this->servicios;
    }

    /**
     * Add clientes
     *
     * @param \AppBundle\Entity\Cliente $clientes
     * @return Usuario
     */
    public function addCliente(\AppBundle\Entity\Cliente $clientes)
    {
        $this->clientes[] = $clientes;

        return $this;
    }

    /**
     * Remove clientes
     *
     * @param \AppBundle\Entity\Cliente $clientes
     */
    public function removeCliente(\AppBundle\Entity\Cliente $clientes)
    {
        $this->clientes->removeElement($clientes);
    }

    /**
     * Get clientes
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getClientes()
    {
        return $this->clientes;
    }

    /**
     * Add empleados
     *
     * @param \AppBundle\Entity\Empleado $empleados
     * @return Usuario
     */
    public function addEmpleado(\AppBundle\Entity\Empleado $empleados)
    {
        $this->empleados[] = $empleados;

        return $this;
    }

    /**
     * Remove empleados
     *
     * @param \AppBundle\Entity\Empleado $empleados
     */
    public function removeEmpleado(\AppBundle\Entity\Empleado $empleados)
    {
        $this->empleados->removeElement($empleados);
    }

    /**
     * Get empleados
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getEmpleados()
    {
        return $this->empleados;
    }

    /**
     * Add citas
     *
     * @param \AppBundle\Entity\Cita $citas
     * @return Usuario
     */
    public function addCita(\AppBundle\Entity\Cita $citas)
    {
        $this->citas[] = $citas;

        return $this;
    }

    /**
     * Remove citas
     *
     * @param \AppBundle\Entity\Cita $citas
     */
    public function removeCita(\AppBundle\Entity\Cita $citas)
    {
        $this->citas->removeElement($citas);
    }

    /**
     * Get citas
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getCitas()
    {
        return $this->citas;
    }
}
