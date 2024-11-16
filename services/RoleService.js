import { TIME, where } from "sequelize";
import { Role } from "../models/models.js";

class RoleService {

    getAllRoles = async () => {
        try {
            const roles = await Role.findAll()
            return roles;
        } catch (error) {
            throw error;
        }
    };

    getRoleById = async (id) => {
        try {
            const role = await Role.findOne({
                where: { id }
            })
        } catch (error) {
            throw error;
        }
    };

    createRole = async (body) => {
        try {
            const newRole = await Role.create(body);
            return newRole;
          } catch (error) {
            throw error;
          }
    };

    updateRole = async (body) => {
        try {
            const { roleId, name, description } = body;
            const updatedRole = await Role.update(
              { name, description },
              { where: { id: roleId } }
            );
            return updatedRole;
          } catch (error) {
            throw error;
          }
    }

    deleteRole = async (roleId) => {
        try {
          const deletedRole = await Role.destroy({
            where: { id: roleId },
          });
          if (deletedRole === 0) {
            throw new Error("Role not found");
          }
          return { message: "Role soft deleted successfully" };
        } catch (error) {
          throw error;
        }
      };
      

}

export default RoleService;