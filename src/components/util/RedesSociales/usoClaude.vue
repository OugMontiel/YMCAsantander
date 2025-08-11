<!-- pages/index.vue - Ejemplo de página principal -->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Mi Sitio Web</h1>
          <!-- Versión compacta en header -->
          <SocialNetworks 
            variant="compact" 
            size="sm" 
            :networks="['facebook', 'twitter', 'instagram']"
            :urls="socialUrls"
          />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido a Nuestra Comunidad
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Únete a nuestra comunidad en redes sociales y mantente conectado
        </p>
        
        <!-- Versión principal con título -->
        <SocialNetworks 
          variant="default"
          size="lg"
          title="Síguenos en Redes Sociales"
          subtitle="Mantente al día con todas nuestras novedades"
          :networks="['facebook', 'twitter', 'instagram', 'linkedin', 'youtube']"
          :urls="socialUrls"
          follow-text="¡Únete a más de 10,000 seguidores!"
        />
      </div>
    </section>

    <!-- Sidebar -->
    <aside class="fixed right-4 top-1/2 transform -translate-y-1/2">
      <!-- Versión vertical para sidebar -->
      <SocialNetworks 
        variant="vertical" 
        size="md" 
        theme="dark"
        :networks="['whatsapp', 'telegram']"
        :urls="contactUrls"
        :show-labels="true"
      />
    </aside>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
            <p class="text-gray-300">
              Email: contacto@ejemplo.com<br>
              Teléfono: +57 123 456 7890
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Enlaces</h3>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <!-- Versión card en footer -->
            <SocialNetworks 
              variant="card"
              size="md"
              title="Redes Sociales"
              theme="dark"
              :networks="['facebook', 'twitter', 'instagram', 'linkedin']"
              :urls="socialUrls"
            />
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2024 Mi Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Configuración de URLs de redes sociales
const social