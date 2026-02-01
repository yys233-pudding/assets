// light.vert
attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat4 u_projTrans;

varying vec4 v_color;
varying vec2 v_texCoords;
varying vec2 v_worldPos;

void main() {
    v_color = a_color;
    v_texCoords = a_texCoord0;

    // ⭐ 关键：a_position已经是世界坐标（因为SpriteBatch使用了相机矩阵）
    v_worldPos = a_position.xy;

    gl_Position = u_projTrans * a_position;
}
