<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation\Exclude;

/**
 * Empleado
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Empleado
{
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->citas = new ArrayCollection();
        $this->servicios = new ArrayCollection();
    }


    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nombre", type="string", length=100)
     * @NotBlank(message="El nombre es obligatorio")
     */
    private $nombre;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=100)
     * @NotBlank(message="Ingresa un email")
     * @Assert\Email(message = "El email {{ value }} no es válido.")
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="apellidos", type="string", length=255)
     */
    private $apellidos;

    /**
     * @var string
     *
     * @ORM\Column(name="telefono", type="string", length=20)
     */
    private $telefono;

    /**
     * @var boolean
     *
     * @ORM\Column(name="alertaCitas", type="boolean", options={"default":true})
     */
    private $alertaCitas;


    /**
     * @var
     * @ORM\OneToMany(targetEntity="Cita", mappedBy="empleado")
     */
    private $citas;

    /**
     * @var
     * @ORM\ManyToMany(targetEntity="Servicio", inversedBy="empleados")
     */
    private $servicios;



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
     * Set nombre
     *
     * @param string $nombre
     * @return Empleado
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get nombre
     *
     * @return string 
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Empleado
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set apellidos
     *
     * @param string $apellidos
     * @return Empleado
     */
    public function setApellidos($apellidos)
    {
        $this->apellidos = $apellidos;

        return $this;
    }

    /**
     * Get apellidos
     *
     * @return string 
     */
    public function getApellidos()
    {
        return $this->apellidos;
    }

    /**
     * Set telefono
     *
     * @param string $telefono
     * @return Empleado
     */
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;

        return $this;
    }

    /**
     * Get telefono
     *
     * @return string 
     */
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * Set alertaCitas
     *
     * @param boolean $alertaCitas
     * @return Empleado
     */
    public function setAlertaCitas($alertaCitas)
    {
        $this->alertaCitas = $alertaCitas;

        return $this;
    }

    /**
     * Get alertaCitas
     *
     * @return boolean 
     */
    public function getAlertaCitas()
    {
        return $this->alertaCitas;
    }

    /**
     * Set usuario
     *
     * @param \AppBundle\Entity\Usuario $usuario
     * @return Empleado
     */
    public function setUsuario(\AppBundle\Entity\Usuario $usuario = null)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get usuario
     *
     * @return \AppBundle\Entity\Usuario 
     */
    public function getUsuario()
    {
        return $this->usuario;
    }


    /**
     * Add citas
     *
     * @param \AppBundle\Entity\Cita $citas
     * @return Empleado
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

    /**
     * Add servicios
     *
     * @param \AppBundle\Entity\Servicio $servicios
     * @return Empleado
     */
    public function addServicio(\AppBundle\Entity\Servicio $servicios)
    {
        $this->servicios[] = $servicios;

        return $this;
    }

    /**
     * Remove servicios
     *
     * @param \AppBundle\Entity\Servicio $servicios
     */
    public function removeServicio(\AppBundle\Entity\Servicio $servicios)
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
}
