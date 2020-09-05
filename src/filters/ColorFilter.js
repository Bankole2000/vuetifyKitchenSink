import VuetifyColors from 'vuetify/lib/util/colors';

export default (color, shade) => {
  const shadeName = shade.split('-').join('');
  return VuetifyColors[color][shadeName];
};
