'use client';

import React, { useEffect } from 'react';

interface Props {
	speedFactor?: number;
	backgroundColor?: string;
	starColor?: [number, number, number];
	starCount?: number;
}

export default function Starfield({
	speedFactor = 0.05,
	backgroundColor = 'black',
	starColor = [255, 255, 255],
	starCount = 3000,
}: Props) {
	useEffect(() => {
		const canvas = document.getElementById('starfield') as HTMLCanvasElement | null;

		if (!canvas) {
			console.error('Canvas element with id "starfield" not found');
			return;
		}

		const context = canvas.getContext('2d');
		if (!context) {
			console.error('Failed to get 2D context for the canvas');
			return;
		}

		// tamanho da tela dinamicamente
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// gera as estrelas
		const stars = Array.from({ length: starCount }, () => ({
			x: Math.random() * 1600 - 800,
			y: Math.random() * 900 - 450,
			z: Math.random() * 1000,
		}));

		const clearCanvas = () => {
			context.fillStyle = backgroundColor;
			context.fillRect(0, 0, canvas.width, canvas.height);
		};

		const drawStar = (x: number, y: number, brightness: number) => {
			context.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
			context.fillRect(x, y, 1, 1);
		};

		// Atualiza a posição das estrelas
		const updateStars = (distance: number) => {
			for (const star of stars) {
				star.z -= distance;
				if (star.z <= 1) star.z += 1000;
			}
		};

		let prevTime = performance.now();
		const animate = (time: number) => {
			const elapsed = time - prevTime;
			prevTime = time;

			updateStars(elapsed * speedFactor);
			clearCanvas();

			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;

			for (const star of stars) {
				const screenX = centerX + star.x / (star.z * 0.001);
				const screenY = centerY + star.y / (star.z * 0.001);

				if (screenX < 0 || screenX >= canvas.width || screenY < 0 || screenY >= canvas.height) {
					continue;
				}

				const brightness = 1 - Math.pow(star.z / 1000, 2);
				drawStar(screenX, screenY, brightness);
			}

			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, [speedFactor, backgroundColor, starColor, starCount]);

	return (
		<canvas
			id="starfield"
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -10,
				pointerEvents: 'none',
				mixBlendMode: 'screen',
			}}
		></canvas>
	);
}
