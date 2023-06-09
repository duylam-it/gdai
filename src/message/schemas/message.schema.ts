import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Conversation } from 'src/conversation/schemas/conversation.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Conversation' })
  conversationId: Conversation;

  @Prop()
  content: string;

  @Prop({ default: false })
  isAssistantMessage: boolean;

  @Prop({ default: 'text' })
  type: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const MessageShema = SchemaFactory.createForClass(Message);
