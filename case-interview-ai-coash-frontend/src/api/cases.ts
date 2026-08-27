import axios from "axios";
import { api } from "./client";

export interface Case {
    id: number;
    caseName: string;
    caseType: string;
    difficulty: string;
    caseContent: string;
    structuredMetadata: Record<string, unknown>;
}

export interface CaseCreate {
    caseName: string;
    caseType: string;
    difficulty: string;
    caseContent: string;
    structuredMetadata: Record<string, unknown>;
}

export async function fetchCases(): Promise<Case[]> {
    try {
        const response = await api.get<Case[]>("case/cases/");
        return response.data.map((caseItem: any) => ({
            id: caseItem.id,
            caseName: caseItem.case_name,
            caseType: caseItem.case_type,
            difficulty: caseItem.difficulty,
            caseContent: caseItem.case_content,
            structuredMetadata: caseItem.structured_metadata,
          }));

    } catch (error) {
        console.error("Error fetching cases:", error);

        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
        }

        throw error;
    }
}

export async function fetchCase(caseId: number): Promise<Case> {
    try {
        const response = await api.get(`case/${caseId}`);
        const caseItem = response.data;

        return {
            id: caseItem.id,
            caseName: caseItem.case_name,
            caseType: caseItem.case_type,
            difficulty: caseItem.difficulty,
            caseContent: caseItem.case_content,
            structuredMetadata: caseItem.structured_metadata,
          };

    } catch (error) {
        console.error("Error fetching cases:", error);

        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
        }

        throw error;
    }
}


export async function addCase(payload: CaseCreate): Promise<Case> {
    const backendPayload = {
      case_name: payload.caseName,
      case_type: payload.caseType,
      difficulty: payload.difficulty,
      case_content: payload.caseContent,
      structured_metadata: payload.structuredMetadata,
    };
  
    const response = await api.post("case/case", backendPayload);
  
    const caseItem = response.data;
  
    return {
      id: caseItem.id,
      caseName: caseItem.case_name,
      caseType: caseItem.case_type,
      difficulty: caseItem.difficulty,
      caseContent: caseItem.case_content,
      structuredMetadata: caseItem.structured_metadata,
    };
  }


  export async function deleteCase(caseId: number) {
    try {

        const response = await api.delete(`case/case/${caseId}`);
        const deleteCase = response.data;

        return deleteCase;

    } catch (error) {
        console.error("Error deleting case:", error);

        if (axios.isAxiosError(error)) {
            console.error(error.response?.data);
        }

        throw error;
    }
}
