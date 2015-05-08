<?php

namespace AppBundle\EventListener;

use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\DBALException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ReservingExceptionListener {
	public function onKernelException(GetResponseForExceptionEvent $event)
	{
		$ex = $event->getException();
		$mensaje = $ex->getMessage();

		if ($ex instanceof DBALException)
		{
			$pos = strrpos($mensaje, 'SQLSTATE[');
			if ($pos !== false)
			{
				$pos = strrpos($mensaje, ":");

				if ($pos !== false)
					$mensaje = substr($mensaje, $pos+1)." ".get_class($ex);

				$response = new JsonResponse();

				$response->setStatusCode(400);
				$response->setData(['mensaje'=>$mensaje]);

				$event->setResponse($response);
			}
		}
		elseif ($ex instanceof HttpException)
		{
			$response = new JsonResponse();
			$response->setStatusCode(400);
			$response->setData(['mensaje'=>$mensaje]);

			$event->setResponse($response);
		}
	}
} 