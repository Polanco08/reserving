<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use JMS\Serializer\Annotation\Exclude;
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
     *
     */
    private $servicios;


    /**
     * @var
     * @ORM\OneToMany(targetEntity="Cliente", mappedBy="usuario")
     *
     */
    private $clientes;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="Empleado", mappedBy="usuario")
     *
     */
    private $empleados;



    /**
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\UserGroup")
     * @ORM\JoinTable(name="usuario_grupo",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")}
     * )
     */
    protected $groups;


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
        $this->servicios = new \Doctrine\Common\Collections\ArrayCollection();
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
}
