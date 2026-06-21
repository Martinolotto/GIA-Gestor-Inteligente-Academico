import { TableAdministrador } from "./administrador.js";
import { TableRepresentante } from "./representante.js";
import { TableInstitucion } from "./institucion.js";
import { TableUsarios } from "./usuario.js";

TableUsarios.hasOne(TableAdministrador, { foreignKey: 'usuario_id' });
TableAdministrador.belongsTo(TableUsarios, { foreignKey: 'usuario_id' });

TableUsarios.hasOne(TableRepresentante, { foreignKey: 'usuario_id' });
TableRepresentante.belongsTo(TableUsarios, { foreignKey: 'usuario_id' });

TableInstitucion.hasMany(TableRepresentante, { foreignKey: 'institucion_id' });
TableRepresentante.belongsTo(TableInstitucion, { foreignKey: 'institucion_id' });