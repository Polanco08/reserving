<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Servicio
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Servicio
{
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
     * @ORM\Column(name="nombre", type="string", length=100, nullable=false)
     * @NotBlank(message="El campo nombre es obligatorio")
     */
    private $nombre;

    /**
     * @var string
     *
     * @ORM\Column(name="descripcion", type="string", length=255)
     */
    private $descripcion;

    /**
     * @var integer
     *
     * @ORM\Column(name="duracion", type="integer", nullable=false)
     * @NotBlank(message="Debes agregar un tiempo estimado")
     */
    private $duracion;

    /**
     * @var string
     *
     * @ORM\Column(name="precio", type="decimal", precision=5, scale=2)
     */
    private $precio;

    /**
     * @var boolean
     *
     * @ORM\Column(name="habilitadoParaReserva", type="boolean")
     */
    private $habilitadoParaReserva;


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
     * @return Servicio
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
     * Set descripcion
     *
     * @param string $descripcion
     * @return Servicio
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get descripcion
     *
     * @return string 
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set duracion
     *
     * @param integer $duracion
     * @return Servicio
     */
    public function setDuracion($duracion)
    {
        $this->duracion = $duracion;

        return $this;
    }

    /**
     * Get duracion
     *
     * @return integer 
     */
    public function getDuracion()
    {
        return $this->duracion;
    }

    /**
     * Set precio
     *
     * @param string $precio
     * @return Servicio
     */
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }

    /**
     * Get precio
     *
     * @return string 
     */
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set habilitadoParaReserva
     *
     * @param boolean $habilitadoParaReserva
     * @return Servicio
     */
    public function setHabilitadoParaReserva($habilitadoParaReserva)
    {
        $this->habilitadoParaReserva = $habilitadoParaReserva;

        return $this;
    }

    /**
     * Get habilitadoParaReserva
     *
     * @return boolean 
     */
    public function getHabilitadoParaReserva()
    {
        return $this->habilitadoParaReserva;
    }
}
