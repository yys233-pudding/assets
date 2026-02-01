#ifdef GL_ES
precision highp float;
#endif

varying vec4 v_color;
varying vec2 v_texCoords;
varying vec2 v_worldPos;
uniform sampler2D u_texture;

uniform vec2  u_lightPos;
uniform float u_lightRadius;
uniform vec3  u_lightColor;
uniform float u_ambient;
uniform float u_minLight;
uniform float u_minAlpha;  // 确保有这个uniform

void main() {
    // 获取原始纹理颜色
    vec4 texColor = texture2D(u_texture, v_texCoords);

    // 计算到光源的距离
    float dist = distance(v_worldPos, u_lightPos);

    // ⭐ 关键修改1：计算光照强度
    // 使用smoothstep实现软边缘
    float lightFactor = 1.0 - smoothstep(0.0, u_lightRadius, dist);

    // ⭐ 关键修改2：计算透明度
    // 敌人：u_minAlpha=0，所以可以完全透明
    // 墙：u_minAlpha>0，保持一定可见度
    float alphaFactor = lightFactor;  // 透明度和光照强度同步

    // 确保最小透明度
    alphaFactor = max(alphaFactor, u_minAlpha);

    // 确保最小亮度
    float finalLight = max(lightFactor + u_ambient, u_minLight);

    // 颜色混合（光照颜色）
    vec3 finalColor = texColor.rgb;
    if (lightFactor > 0.0) {
        finalColor = texColor.rgb * mix(vec3(1.0), u_lightColor, lightFactor);
    }

    // 应用亮度
    finalColor *= finalLight;

    // ⭐ 关键修改3：应用透明度到alpha通道
    float finalAlpha = texColor.a * alphaFactor;

    // 调试：如果alpha接近0，可以完全透明
    if (finalAlpha < 0.01) {
        discard;  // 完全丢弃这个片段
    }

    gl_FragColor = vec4(finalColor, finalAlpha);
}
