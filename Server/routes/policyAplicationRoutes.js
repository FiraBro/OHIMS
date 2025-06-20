import express from "express";
import {
  applyForPolicy,
  getAllApplications,
  updateApplicationStatus,
  getUserApplications,
} from "../controllers/policyAplicationController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
const policyRouter = express.Router();

policyRouter.post(
  "/apply",
  protect,
  upload.array("documents", 3),
  applyForPolicy
);
policyRouter.get("/admin/all", protect, isAdmin, getAllApplications);
policyRouter.put(
  "/admin/:id/status",
  protect,
  isAdmin,
  updateApplicationStatus
);

policyRouter.get("/my-applications", protect, getUserApplications);

export default policyRouter;
