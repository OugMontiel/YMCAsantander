<template>
  <div :class="['social-media-component', customClass]" :style="containerStyles" role="navigation" :aria-label="ariaLabel">
    <a
      v-for="network in socialNetworks"
      :key="network.name"
      :href="network.url"
      target="_blank"
      rel="noopener noreferrer"
      :style="getLinkStyles(network)"
      @mouseenter="hoveredIcon = network.name"
      @mouseleave="hoveredIcon = null"
      :aria-label="network.label"
      :title="network.label"
    >
      <!-- Renderizado directo de UIcon -->
      <UIcon
        :name="network.iconName"
        :width="`${currentSize.iconEm}em`"
        :height="`${currentSize.iconEm}em`"
        :style="{color: getIconColor(network)}"
      />
      <span v-if="showLabels" :style="labelStyles">
        {{ network.name }}
      </span>
    </a>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";

// Props del componente
const props = defineProps({
  variant: {
    type: String,
    default: "header",
    validator: (value) => ["header", "footer"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large", "xlarge"].includes(value),
  },
  color: {
    type: String,
    default: "#333",
  },
  hoverColor: {
    type: String,
    default: "#0066cc",
  },
  spacing: {
    type: String,
    default: "normal",
    validator: (value) => ["tight", "normal", "loose", "relaxed"].includes(value),
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (value) => ["horizontal", "vertical"].includes(value),
  },
  showLabels: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
  ariaLabel: {
    type: String,
    default: "Síguenos en redes sociales",
  },
});

// Estado reactivo
const hoveredIcon = ref(null);

// Configuraciones
const sizeConfig = {
  small: {icon: 20, iconEm: 1.25, gap: 8}, // 20px ≈ 1.25em
  medium: {icon: 28, iconEm: 1.75, gap: 12}, // 28px ≈ 1.75em
  large: {icon: 36, iconEm: 2.25, gap: 16}, // 36px ≈ 2.25em
  xlarge: {icon: 48, iconEm: 3, gap: 20}, // 48px ≈ 3em
};

const spacingConfig = {
  tight: 0.5,
  normal: 1,
  loose: 1.5,
  relaxed: 2,
};

// Redes sociales con iconName para UIcon
const socialNetworks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/ymca-santander",
    iconName: "logos:linkedin-icon",
    label: "LinkedIn YMCA Santander",
    brandColor: "#0077B5",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/stories/ymca.sder/",
    iconName: "logos:instagram-icon",
    label: "Instagram YMCA Santander",
    brandColor: "#E4405F",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/YMCASantander/",
    iconName: "logos:facebook",
    label: "Facebook YMCA Santander",
    brandColor: "#1877F2",
  },
];

// Computed properties
const currentSize = computed(() => sizeConfig[props.size]);
const currentSpacing = computed(() => spacingConfig[props.spacing]);

const containerStyles = computed(() => ({
  display: "flex",
  flexDirection: props.direction === "vertical" ? "column" : "row",
  gap: `${currentSize.value.gap * currentSpacing.value}px`,
  alignItems: "center",
  justifyContent: props.variant === "header" ? "flex-end" : "center",
}));

const labelStyles = computed(() => ({
  fontSize: `${currentSize.value.icon * 0.4}px`,
  fontWeight: "500",
  whiteSpace: "nowrap",
}));

// Métodos
const getLinkStyles = (network) => ({
  display: "flex",
  alignItems: "center",
  gap: props.showLabels ? "8px" : "0",
  textDecoration: "none",
  transition: "all 0.3s ease",
  padding: "4px",
  borderRadius: "6px",
  color: hoveredIcon.value === network.name ? props.hoverColor || network.brandColor : props.color,
  transform: hoveredIcon.value === network.name ? "scale(1.1)" : "scale(1)",
});

const getIconColor = (network) => {
  return hoveredIcon.value === network.name ? props.hoverColor || network.brandColor : props.color;
};
</script>

<style scoped>
.social-media-component a {
  /* Reset de estilos de enlace */
  outline: none;
}

.social-media-component a:focus {
  /* Estilos de foco para accesibilidad */
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .social-media-component {
    justify-content: center !important;
  }
}

@media (max-width: 480px) {
  .social-media-component {
    gap: 8px !important;
  }
}
</style>
